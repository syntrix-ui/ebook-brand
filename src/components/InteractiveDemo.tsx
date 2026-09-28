import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Zap, Shield, Rocket, Heart, CheckCircle2 } from 'lucide-react';

export default function InteractiveDemo() {
  const [likes, setLikes] = useState(42);
  const [activeTab, setActiveTab] = useState<'astro' | 'react' | 'tailwind' | 'shadcn'>('astro');

  const features = {
    astro: {
      title: 'Astro 5.0 Speed',
      description: 'Zero-JS by default rendering engine providing lightning fast performance.',
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      badge: 'Island Architecture',
    },
    react: {
      title: 'React 19 Components',
      description: 'Rich client-side interactivity hydrated seamlessly on-demand.',
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      badge: 'Full Hydration',
    },
    tailwind: {
      title: 'Tailwind CSS Utility',
      description: 'Rapid UI styling using modern utility classes and custom color design tokens.',
      icon: <Sparkles className="h-6 w-6 text-blue-400" />,
      badge: 'JIT Engine',
    },
    shadcn: {
      title: 'shadcn/ui Accessible',
      description: 'Beautiful, customizable Radix primitives styled with Tailwind & CVA.',
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      badge: 'Copy & Paste UI',
    },
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const activeFeature = features[activeTab];

  return (
    <Card className="w-full max-w-2xl border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="glow" className="px-3 py-1 text-xs">
            Interactive React Island
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          Tech Stack Synergy Showcase
        </CardTitle>
        <CardDescription className="text-slate-400">
          Click the tabs below to test React state hydration inside Astro!
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-4 gap-2 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800">
          {(['astro', 'react', 'tailwind', 'shadcn'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-3 rounded-md text-xs sm:text-sm font-medium capitalize transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-purple-600/90 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Detail Card */}
        <div className="p-5 rounded-lg bg-gradient-to-br from-slate-800/40 to-slate-900/80 border border-slate-700/50 flex items-start gap-4 transition-all duration-300">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            {activeFeature.icon}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg text-slate-100">{activeFeature.title}</h4>
              <Badge variant="secondary" className="bg-slate-800 text-purple-300 border-purple-500/20">
                {activeFeature.badge}
              </Badge>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{activeFeature.description}</p>
          </div>
        </div>

        {/* Interactive Action Area */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/40 border border-slate-800/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">
              Client Hydration Active
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              onClick={handleLike}
              className="group"
            >
              <Heart className={`h-4 w-4 fill-pink-500 text-pink-500 group-hover:scale-125 transition-transform`} />
              <span>{likes} Star Points</span>
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="justify-center border-t border-slate-800/60 pt-4 text-xs text-slate-500">
        Built with Astro 5 • React 19 • Tailwind CSS • shadcn/ui
      </CardFooter>
    </Card>
  );
}
