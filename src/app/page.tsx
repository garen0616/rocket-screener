"use client";
import React, { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";
import HeaderBar from "./components/HeaderBar";
import KpiCard from "./components/KpiCard";
import EarningsCard from "./components/EarningsCard";
import { MarkdownCard } from "./components/MarkdownCard";
import ProcessingIndicator from "./components/ProcessingIndicator";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const json = data?.result_json;
  const md = data?.report_md as string;

  const [busy, setBusy] = useState(false);

  return (
    <DashboardLayout>
      <section className="panel panel--contrast space-y-6">
        <HeaderBar onResult={setData} onBusyChange={setBusy} />
        <ProcessingIndicator active={busy} />
      </section>

      <section className="panel panel--glass space-y-4">
        <div>
          <p className="panel-title">KEY SIGNALS</p>
          <h2>關鍵評分即時更新</h2>
        </div>
        <div className="panel-grid">
          <KpiCard
            title="總分"
            value={Number(json?.scores?.total) || 0}
            note={
              json
                ? `${String(json?.cap_class || "").toUpperCase()} · as of ${json?.as_of}`
                : "等待分析"
            }
          />
          <KpiCard
            title="今日價格"
            value={Number(json?.targets?.current?.price) || 0}
            accent="violet"
            note={json ? "回溯日實際收盤價" : undefined}
          />
          <KpiCard
            title="購買建議"
            displayValue={false}
            accent="emerald"
            note={
              json
                ? `進場帶：${json?.positioning?.entry_band ?? "待模型填寫"}\n加碼條件：${
                    json?.positioning?.add_condition ?? "逢關鍵事件/量縮回測"
                  }\n減碼條件：${
                    json?.positioning?.trim_condition ?? "突破目標價或跌破風控位"
                  }`
                : "等待分析"
            }
          />
        </div>
      </section>

      <section className="space-y-4">
        {md ? (
          <MarkdownCard title="🧠 模型報告" md={md} />
        ) : (
          <div className="panel panel--glass text-white/60 text-sm">
            <p>尚未輸入標的，完成查詢後將顯示模型摘要與回覆。</p>
          </div>
        )}
        <EarningsCard items={json?.earnings} summaryMd={json?.earnings_md} />
      </section>
    </DashboardLayout>
  );
}
