"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// --- CHART CONTEXT & CONTAINER ---------------------------------------------

export type ChartConfig = {
  [seriesKey: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<"light" | "dark", string> }
  );
};

type ChartContextProps = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be inside <ChartContainer>");
  return ctx;
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uid = React.useId().replace(/:/g, "");
  const chartId = `chart-${id ?? uid}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        data-slot="chart"
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground " +
            "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 " +
            "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const THEMES = { light: "", dark: ".dark" } as const;
function ChartStyle({
  id,
  config,
}: {
  id: string;
  config: ChartConfig;
}) {
  const entries = Object.entries(config).filter(
    ([, cfg]) => cfg.color || cfg.theme
  );
  if (!entries.length) return null;

  const css = Object.entries(THEMES)
    .map(
      ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${entries
  .map(([key, cfg]) => {
    const col =
      cfg.theme?.[theme as keyof typeof cfg.theme] || cfg.color;
    return col ? `  --color-${key}: ${col};` : "";
  })
  .filter(Boolean)
  .join("\n")}
}`
    )
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

// --- CUSTOM TOOLTIP --------------------------------------------------------

export const ChartTooltip = RechartsPrimitive.Tooltip;

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: Array<{
    dataKey?: string;
    name?: string;
    value?: number;
    color?: string;
    payload?: any;
  }>;
  label?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  formatter?: (
    value: any,
    name?: string,
    item?: any,
    index?: number,
    payload?: any
  ) => React.ReactNode;
  labelFormatter?: (value: any, payload?: any[]) => React.ReactNode;
  nameKey?: string;
  labelKey?: string;
  className?: string;
  labelClassName?: string;
  color?: string;
}

export function ChartTooltipContent({
  active,
  payload = [],
  label,
  hideLabel = false,
  hideIndicator = false,
  indicator = "dot",
  formatter,
  labelFormatter,
  nameKey,
  labelKey,
  className,
  labelClassName,
  color,
}: ChartTooltipContentProps) {
  // 1) hooks at top—always run
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || payload.length === 0) {
      return null;
    }
    const first = payload[0];
    const key = labelKey ?? first.name ?? first.dataKey ?? "value";
    const seriesCfg = config[key] ?? {};
    const raw =
      typeof label === "string"
        ? seriesCfg.label ?? label
        : seriesCfg.label;
    if (!raw) {
      return null;
    }
    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(raw, payload)}
        </div>
      );
    }
    return (
      <div className={cn("font-medium", labelClassName)}>{raw}</div>
    );
  }, [config, hideLabel, payload, label, labelFormatter, labelKey, labelClassName]);

  // 2) early return
  if (!active || payload.length === 0) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "bg-background border border-border/50 shadow-xl rounded-lg p-2 text-xs",
        className
      )}
    >
      {!nestLabel && tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, idx) => {
          const key = nameKey ?? item.name ?? item.dataKey ?? "value";
          const seriesCfg = config[key] ?? {};
          const indColor = color ?? item.color;
          return (
            <div
              key={idx}
              className={cn(
                "flex w-full items-center gap-2",
                indicator === "dot" && "items-center"
              )}
            >
              {!hideIndicator && (
                seriesCfg.icon ? (
                  <seriesCfg.icon />
                ) : (
                  <div
                    className={cn("rounded-[2px]", {
                      "h-2.5 w-2.5": indicator === "dot",
                      "w-1 h-full": indicator === "line",
                      "w-0 border-dashed border-[1.5px]": indicator === "dashed",
                    })}
                    style={{
                      backgroundColor:
                        indicator === "dashed" ? "transparent" : indColor,
                      borderColor:
                        indicator === "dashed" ? indColor : undefined,
                    }}
                  />
                )
              )}
              <div className="flex flex-1 justify-between">
                <span className="text-muted-foreground">
                  {seriesCfg.label ?? item.name}
                </span>
                <span className="font-mono">
                  {item.value?.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- CUSTOM LEGEND --------------------------------------------------------

export const ChartLegend = RechartsPrimitive.Legend;

interface ChartLegendContentProps {
  payload?: Array<{ dataKey?: string; value?: string; color?: string }>;
  verticalAlign?: "top" | "bottom";
  hideIcon?: boolean;
  nameKey?: string;
  className?: string;
}

export function ChartLegendContent({
  payload = [],
  verticalAlign = "bottom",
  hideIcon = false,
  nameKey,
  className,
}: ChartLegendContentProps) {
  const { config } = useChart();
  if (!payload.length) return null;

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, idx) => {
        const key = nameKey ?? item.value ?? "value";
        const seriesCfg = config[key] ?? {};
        return (
          <div key={idx} className="flex items-center gap-1.5">
            {seriesCfg.icon && !hideIcon ? (
              <seriesCfg.icon />
            ) : (
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {seriesCfg.label ?? item.value}
          </div>
        );
      })}
    </div>
  );
}
