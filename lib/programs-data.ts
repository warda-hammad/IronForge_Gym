export interface WorkoutProgram {
    id: string;
    name: string;
    category: 'Cardio' | 'Strength' | 'Flexibility' | 'Combat' | 'Mixed';
    duration: string;
    intensity: 'Low' | 'Medium' | 'High' | 'Extreme';
    trainer: string;
    image: string;
    videoUrl: string;
    description: string;
    benefits: string[];
    equipment: string[];
}

export const PROGRAMS: WorkoutProgram[] = [
    {
        id: 'hiit',
        name: 'High Intensity HIIT',
        category: 'Cardio',
        duration: '45 min',
        intensity: 'High',
        trainer: 'Alex S.',
        image: '/assets/classes/hiit.png',
        videoUrl: 'https://www.youtube-nocookie.com/embed/h1eL60V9B0o', // MadFit HIIT
        description: 'A fast-paced workout that alternates between short bursts of intense exercise and even shorter rest periods. Designed to torch calories and improve cardiovascular health.',
        benefits: ['Maximum calorie burn', 'Improved metabolic rate', 'Increased endurance'],
        equipment: ['None', 'Light dumbbells (optional)']
    },
    {
        id: 'power-lifting',
        name: 'Power Lifting',
        category: 'Strength',
        duration: '60 min',
        intensity: 'Extreme',
        trainer: 'Marcus R.',
        image: '/assets/classes/powerlifting.png',
        videoUrl: 'https://www.youtube-nocookie.com/embed/J39TzHOnx3Y', // Powerlifting Squat
        description: 'Focus on the three main lifts: Squat, Bench Press, and Deadlift. This program is for those looking to build raw strength and mastery over heavy loads.',
        benefits: ['Raw strength gain', 'Bone density improvement', 'Mental toughness'],
        equipment: ['Barbell', 'Weights', 'Squat Rack', 'Bench']
    },
    {
        id: 'yoga-flow',
        name: 'Yoga Flow',
        category: 'Flexibility',
        duration: '50 min',
        intensity: 'Low',
        trainer: 'Sarah J.',
        image: '/assets/classes/yoga.png',
        videoUrl: 'https://www.youtube-nocookie.com/embed/v7AYKMP6rOE', // Yoga Flow
        description: 'A graceful and fluid sequence of poses linked by breath. Perfect for improving mobility, balance, and finding mental clarity.',
        benefits: ['Increased flexibility', 'Stress reduction', 'Better posture'],
        equipment: ['Yoga mat', 'Blocks (optional)']
    },
    {
        id: 'crossfit',
        name: 'CrossFit Box',
        category: 'Mixed',
        duration: '60 min',
        intensity: 'Extreme',
        trainer: 'David K.',
        image: '/assets/classes/crossfit.png',
        videoUrl: 'https://www.youtube-nocookie.com/embed/iY6qUa6E6wE', // CrossFit Games
        description: 'Constantly varied functional movements performed at high intensity. We combine weightlifting, gymnastics, and cardio for the ultimate test of fitness.',
        benefits: ['Full-body conditioning', 'Versatile skill set', 'Community motivation'],
        equipment: ['Kettlebells', 'Pull-up bar', 'Ropes', 'Medicine balls']
    },
    {
        id: 'boxing',
        name: 'Boxing',
        category: 'Combat',
        duration: '45 min',
        intensity: 'High',
        trainer: 'Mike T.',
        image: '/assets/classes/boxing.png',
        videoUrl: 'https://www.youtube-nocookie.com/embed/8B5K3UqE-1U', // Boxing Conditioning
        description: 'Learn the sweet science of boxing. Develop speed, power, and coordination through bag work, footwork drills, and conditioning.',
        benefits: ['Self-defense skills', 'Superior cardio', 'Core strength'],
        equipment: ['Boxing gloves', 'Hand wraps', 'Heavy bag']
    },
    {
        id: 'spin-cycle',
        name: 'Spin Cycle',
        category: 'Cardio',
        duration: '45 min',
        intensity: 'Medium',
        trainer: 'Emily W.',
        image: 'https://images.unsplash.com/photo-1534258936925-c4894738bfe3?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube-nocookie.com/embed/J9yH116r8_o', // GCN Spin Class
        description: 'Get in the rhythm with a high-energy indoor cycling session. Set to motivating music, this class will push your heart rate and build leg power.',
        benefits: ['Low-impact cardio', 'Leg muscle toning', 'High caloric expenditure'],
        equipment: ['Stationary bike', 'Cycling shoes (optional)']
    }
];
