"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MarketingBudgetsCase from "./MarketingBudgetsCase";
import MarketingFunnelCase from "./MarketingFunnelCase";

function CaseStudyContent() {
  const searchParams = useSearchParams();
  const caseType = searchParams.get("case");

  if (caseType === "marketing-budgets") {
    return <MarketingBudgetsCase />;
  }

  if (caseType === "marketing-funnel") {
    return <MarketingFunnelCase />;
  }

  return null;
}

export default function CaseStudyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyContent />
    </Suspense>
  );
}
