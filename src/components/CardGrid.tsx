import Link from 'next/link';

interface Card {
  title: string;
  image: string;
  description?: string;
  href?: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function CardGrid({ cards, columns = 3, className = "" }: CardGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {cards.map((card, index) => (
        <div key={index} className="group">
          {card.href ? (
            <Link href={card.href} className="block">
              <CardContent card={card} />
            </Link>
          ) : (
            <CardContent card={card} />
          )}
        </div>
      ))}
    </div>
  );
}

function CardContent({ card }: { card: Card }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group-hover:scale-105">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-sm">{card.title} Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-light text-gray-900 mb-2 uppercase tracking-wide">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        )}
      </div>
    </div>
  );
}