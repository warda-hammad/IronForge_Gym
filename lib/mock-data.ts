export type Category = 'Supplements' | 'Apparel' | 'Equipment' | 'Membership';

export interface Product {
    id: string;
    name: string;
    category: Category;
    price: number;
    image: string;
    description: string;
    features?: string[];
    nutritionalFacts?: Record<string, string>;
    sizeGuide?: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Whey Protein Isolate',
        category: 'Supplements',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1593095912543-cb0bb45fe6bd?q=80&w=2070&auto=format&fit=crop',
        description: 'High-quality whey protein isolate for muscle recovery and growth. Each serving provides 25g of protein with minimal carbs and fat.',
        nutritionalFacts: {
            'Protein': '25g',
            'Calories': '120',
            'Fat': '1g',
            'Carbs': '2g'
        },
        features: ['Fast absorption', 'Low lactose', 'Gluten-free']
    },
    {
        id: '2',
        name: 'Pre-Workout Energizer',
        category: 'Supplements',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2070&auto=format&fit=crop',
        description: 'Explosive energy and focused intensity to power through your hardest workouts. Features caffeine, beta-alanine, and citrulline malate.',
        nutritionalFacts: {
            'Caffeine': '200mg',
            'Beta-Alanine': '3.2g',
            'Citrulline Malate': '6g'
        },
        features: ['Intense focus', 'Skin-splitting pumps', 'No crash']
    },
    {
        id: '3',
        name: 'Performance Compression Leggings',
        category: 'Apparel',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop',
        description: 'Ultra-stretchy, moisture-wicking compression leggings designed for maximum mobility and support during intense training sessions.',
        sizeGuide: ['XS', 'S', 'M', 'L', 'XL'],
        features: ['4-way stretch', 'Squat-proof', 'Hidden pocket']
    },
    {
        id: '4',
        name: 'Aesthetic Stringer Tank',
        category: 'Apparel',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop',
        description: 'Classic bodybuilding stringer tank top that highlights your physique. Made from soft, breathable cotton blend.',
        sizeGuide: ['S', 'M', 'L', 'XL', 'XXL'],
        features: ['Deep-cut armholes', 'Raw edge design', 'Premium cotton']
    },
    {
        id: '5',
        name: 'Olympic Barbell (20kg)',
        category: 'Equipment',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
        description: 'Professional-grade Olympic barbell with standard 50mm sleeves. Precision knurling for a secure grip.',
        features: ['1500lb capacity', 'Hard chrome finish', 'Smooth needle bearings']
    },
    {
        id: '6',
        name: 'Powerlifting Lever Belt',
        category: 'Equipment',
        price: 89.00,
        image: 'https://images.unsplash.com/photo-1620188467120-0988514931a1?q=80&w=1887&auto=format&fit=crop',
        description: 'Heavy-duty 13mm leather belt with a quick-release steel lever. Provides ultimate core stability for heavy squats and deadlifts.',
        sizeGuide: ['S (26-30")', 'M (30-34")', 'L (34-38")', 'XL (38-42")'],
        features: ['Premium suede leather', 'Stainless steel lever', 'Standard 4-inch width']
    },
    {
        id: '7',
        name: 'Creatine Monohydrate',
        category: 'Supplements',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1593096515766-3d84358a98f1?q=80&w=1887&auto=format&fit=crop',
        description: 'Pure micronized creatine monohydrate for increased strength, power, and muscle mass. No fillers or additives.',
        nutritionalFacts: {
            'Creatine Monohydrate': '5g'
        },
        features: ['Highly soluble', 'Flavorless', 'Purest grade']
    },
    {
        id: '8',
        name: 'Adjustable Dumbbells (Pair)',
        category: 'Equipment',
        price: 399.00,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop',
        description: 'Save space with these adjustable dumbbells. Replaces 15 sets of weights, ranging from 5 to 52.5 lbs each.',
        features: ['Easy selection dial', 'Compact design', 'Durable molding']
    }
];
