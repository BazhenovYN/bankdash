import { Sticker, StickerList } from '@/components/sticker';
import { InsuranceIcon, SafetyIcon, ShoppingIcon } from './icons';

const data = [
  { id: 1, title: 'Life insurance', content: 'Unlimited protection', icon: <InsuranceIcon /> },
  { id: 2, title: 'Shopping', content: 'Buy. Think. Grow.', icon: <ShoppingIcon /> },
  { id: 3, title: 'Safety', content: 'We are your allies', icon: <SafetyIcon /> },
];

export function WidgetServiceStickers() {
  return (
    <StickerList>
      {data.map((record) => (
        <Sticker
          key={record.id}
          title={record.title}
          content={record.content}
          icon={record.icon}
          variant="secondary"
        />
      ))}
    </StickerList>
  );
}
