export function getTitleReport(report) {
  switch (report.transaction_type) {
    case 1:
      return report.status == 'in' ? 'Transferência recebida' : 'Transferência enviada';
    case 2:
      return report.status == 'in' ? 'Pix recebido' : 'Pix enviado';
    case 3:
      return 'Empréstimo';
    case 4:
      return report.status == 'in' ? 'Resgate na poupança' : 'Depósito na poupança';
  }
}