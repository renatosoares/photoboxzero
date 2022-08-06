import React, { createContext, useContext } from "react";
import ReportHeaderContextProps from "types/report-header-context-props";

type ProvideReportHeaderProps = ReportHeaderContextProps & {
  children: React.ReactNode;
};

export const ReportHeaderContextDefault = {
  title: null,
  actions: [],
};

const ReportHeaderContext = createContext<ReportHeaderContextProps>(
  ReportHeaderContextDefault
);

export function ProvideReportHeader({
  children,
  title,
  actions,
}: ProvideReportHeaderProps) {
  const reportHeader = useProvideReportHeader({ title, actions });

  return (
    <ReportHeaderContext.Provider value={reportHeader}>
      {children}
    </ReportHeaderContext.Provider>
  );
}

export const useReportHeaderContext = () => {
  return useContext(ReportHeaderContext);
};

function useProvideReportHeader({ title, actions }: ReportHeaderContextProps) {
  return {
    title: title,
    actions: actions,
  };
}
