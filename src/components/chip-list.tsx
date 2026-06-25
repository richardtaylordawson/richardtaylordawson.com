type ChipListProps = {
  items: string[];
};

export function ChipList({ items }: ChipListProps) {
  return (
    <>
      {items.map((item) => (
        <Chip label={item} key={item} />
      ))}
    </>
  );
}

export function Chip({ label }: { label: string }) {
  return <span className="skill-chip">{label}</span>;
}
