import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  trigger_alert: number | undefined,
}


// export class DataManipulator {
//   static generateRow(serverResponds: ServerRespond[]) {
//     return serverResponds.map((el: any) => {
//       return {
//         stock: el.stock,
//         top_ask_price: el.top_ask && el.top_ask.price || 0,
//         timestamp: el.timestamp,
//       };
//     })
//   }
// }
export class DataManipulator {
  static generateRow(serverRespond: ServerRespond{]): Row {
  const priceABC = (serverRespond[0].top_ask.price + serverRespond[0].top bid.price) / 2;
  const priceDEF = (serverRespond[1].top_ask.price + serverRespond[1].top bid.price) / 2;
  const ratio = priceABC / priceDEF;
  const upperBound = 1 + 0.05;
  const lowerBound = 1 - 0.05;
  return {
  price_abc: priceABC,
  price_def: priceDEF,
  ratio,
  timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp ?
  serverRespond[0].timestamp : serverRespond[1].timestamp,
  upper_bound: upperBound,
  lower_bound: lowerBound,
  trigger alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined,
  };
  }
   
  
    