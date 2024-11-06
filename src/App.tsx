import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Confetti } from '@/components/ui/confetti';
import { useState } from 'react';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 space-y-8">
      <NeonGradientCard className="max-w-lg w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Neon Gradient Card
          </h1>
          <p className="text-gray-400">
            A beautiful card component with neon gradient effects and smooth hover animations.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold"
            onClick={handleClick}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Celebrate!
          </Button>
        </div>
      </NeonGradientCard>

      <Confetti
        active={showConfetti}
        duration={3000}
        onComplete={() => setShowConfetti(false)}
      />
    </div>
  );
}

export default App;