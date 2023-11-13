// export const updateHaverst = (db, haverst) => {
//   const params = [
//     haverst.ripeBunches,
//     haverst.greenBunches,
//     haverst.workerMatricule,
//     haverst.reportId,
//     haverst.loadingZone,
//   ];
//   db.transaction((tx) => {
//     tx.executeSql(
//       "UPDATE haversts SET ripe_bunches = (?), green_bunches = (?) WHERE worker_matricule = (?) AND report_id = (?) AND loadingZone = (?)",
//       params,
//       (_, result) => {
//         console.log(result);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   });
// };
