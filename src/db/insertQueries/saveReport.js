import { db } from "../sqlite";

const saveReport = (report, setCurrentReport, gotoReportPage) => {
  const newReport = [
    report.report_id,
    report.date,
    report.supervisor_id,
    report.block_id,
    report.plot_id,
    report.operation_id,
    report.man_day,
    report.penality,
    0,
  ];

  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO reports (report_id, date, supervisor_id, block_id, plot_id, operation_id, man_day, penality, sent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      newReport,
      (result) => {
        console.log(`report ${report.report_id} saved succesfully`);
        setCurrentReport(report);
        gotoReportPage();
      },
      (error) => {
        console.log(`An error occured, couldn't save report `, newReport);
      }
    );
  });
};

export default saveReport;
