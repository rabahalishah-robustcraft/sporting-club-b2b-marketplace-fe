import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const cardData = [
    {
      title: "Total Users",
      value: "45,678",
      description: "Active Accounts this quarter",
    },
    {
      title: "Active Listings",
      value: "1,234",
      description: "Listings created this month",
    },
    {
      title: "Messages Sent",
      value: "9,876",
      description: "Requires immediate attention",
    },
    {
      title: "Successful Deals",
      value: "23",
      description: "Deal closed this quarter",
    },
  ];
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4  *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cardData.map((card, index) => (
        <Card key={index} className="@container/card bg-slate-50">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {card.value}
            </CardTitle>
            <CardAction></CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="text-muted-foreground">{card.description}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
