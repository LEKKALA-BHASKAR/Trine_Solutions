/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		colors: {
  			// Premium Trine Solutions Color Palette
  			'trine-orange': '#F78B1F',
  			'trine-green': '#22C55E',
  			'trine-lightblue': '#38BDF8',
  			'trine-black': '#0A0A0A',
  			'trine-white': '#FFFFFF',
  			// Semantic aliases
  			'primary-orange': '#F78B1F',
  			'primary-green': '#22C55E',
  			'primary-lightblue': '#38BDF8',
  			// Shadcn Theme Colors
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-orange-green': 'linear-gradient(135deg, #F78B1F 0%, #22C55E 100%)',
  			'gradient-orange-lightblue': 'linear-gradient(135deg, #F78B1F 0%, #38BDF8 100%)',
  			'gradient-green-lightblue': 'linear-gradient(135deg, #22C55E 0%, #38BDF8 100%)',
  			'gradient-lightblue-orange': 'linear-gradient(135deg, #38BDF8 0%, #F78B1F 100%)',
  			'gradient-black-orange': 'linear-gradient(135deg, #0A0A0A 0%, #F78B1F 100%)',
  			'gradient-premium': 'linear-gradient(135deg, #F78B1F 0%, #38BDF8 50%, #22C55E 100%)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xl: '22px',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			'fade-in-up': {
  				from: { opacity: '0', transform: 'translateY(20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-down': {
  				from: { opacity: '0', transform: 'translateY(-20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'slide-in-left': {
  				from: { opacity: '0', transform: 'translateX(-30px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slide-in-right': {
  				from: { opacity: '0', transform: 'translateX(30px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'scale-in': {
  				from: { opacity: '0', transform: 'scale(0.95)' },
  				to: { opacity: '1', transform: 'scale(1)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 20px theme(colors.trine-orange / 0.3)' },
  				'50%': { boxShadow: '0 0 40px theme(colors.trine-orange / 0.6)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
  			'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
  			'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
  			'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
  			'scale-in': 'scale-in 0.4s ease-out forwards',
  			'float': 'float 3s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};