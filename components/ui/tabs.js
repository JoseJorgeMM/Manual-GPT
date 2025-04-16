export function Tabs({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
export function TabsList({ children, ...props }) {
  return <div className="flex gap-2" {...props}>{children}</div>;
}
export function TabsTrigger({ value, children }) {
  return <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">{children}</button>;
}
export function TabsContent({ value, children }) {
  return <div>{children}</div>;
}
