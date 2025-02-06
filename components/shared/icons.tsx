import { ArrowDown, Check, ChevronsUpDown, Star, LucideProps } from 'lucide-react';

const Icons = {
  Star: (props: LucideProps) => <Star {...props} />,
  ArrowDown: (props: LucideProps) => <ArrowDown {...props} />,
  ChevronsUpDown: (props: LucideProps) => <ChevronsUpDown {...props} />,
  Check: (props: LucideProps) => <Check {...props} />,
};

export default Icons;
