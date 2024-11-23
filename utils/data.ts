import { useQuery } from '@tanstack/react-query';

export interface LineDataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
export interface PieChartItem {
  name: string;
  value: number;
}

export const randomLineData = (numItems: number): LineDataItem[] => {
  return Array.from({ length: numItems }, (_, i) => ({
    name: `Page ${String.fromCharCode(65 + i)}`, 
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  }));
};

export const randomPieData = (count: number): PieChartItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Group ${String.fromCharCode(65 + i)}`, 
    value: Math.floor(Math.random() * 400), 
  }));
};

export const useRandomLineData = () => {
  return useQuery<LineDataItem[]>({
    queryKey: ['lineData'], 
    queryFn: () => randomLineData(10),
    refetchInterval: 3000, 
  });
};

export const useRandomPieData = () => {
  return useQuery<PieChartItem[]>({
    queryKey: ['pieData'], 
    queryFn: () => randomPieData(5), 
    refetchInterval: 3000, 
  });
};
