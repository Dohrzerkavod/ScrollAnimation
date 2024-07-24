<template>
  <div :class="['container', { dark: isDarkMode }]">
    <div class="text-block" ref="textBlock">
      This is a sample block of text that will be animated using different
      <span ref="lastWord" class="last-word">effects.</span>
    </div>
    <div class="next-section" ref="nextSection">
      <h1></h1>
    </div>
    <button class="dark-mode-toggle" @click="toggleDarkMode">
      <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      {{ darkModeText }}
    </button>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ScrollTextAnimation',
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    darkModeText() {
      return this.isDarkMode ? 'Light' : 'Dark';
    },
  },
  mounted() {
    this.initScrollAnimation();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    initScrollAnimation() {
      // Hide the last word initially
      gsap.set(this.$refs.lastWord, { opacity: 0, y: -150 });

      // ScrollTrigger for the last word animation
      ScrollTrigger.create({
        trigger: this.$refs.textBlock,
        start: 'top center',
        end: '+=300', // Continue for 300px after start
        scrub: true,
        pin: true, // Pin the text block while animating
        onUpdate: self => {
          const progress = self.progress;
          gsap.to(this.$refs.lastWord, {
            opacity: progress > 0.2 ? progress : 0,
            y: (1 - progress) * -500,
            duration: 0.5,
            ease: 'none',
          });
        },
        onLeave: () => this.enableNextSection(),
        markers: false
      });
    },
    enableNextSection() {
      ScrollTrigger.create({
        trigger: this.$refs.nextSection,
        start: 'top bottom',
        end: 'bottom top',
        pin: false, // Unpin the next section to continue normal scrolling
        pinSpacing: false,
      });
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.container {
  font-family: 'Nunito', sans-serif;
  height: 300vh; /* To enable scrolling */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #e0e0e0;
  padding: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container.dark {
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.95);
}

.text-block {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  background-color: inherit;
  padding: 4rem;
  border-radius: 0.5rem;
  box-shadow: rgba(255, 66, 8, 0.2) 0px 8px 24px;
}

.container.dark .text-block{
  box-shadow: rgba(125, 0, 215, 0.2) 0px 8px 24px;
}

.last-word {
  display: inline-block;
}

.next-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 2rem;
}

.dark-mode-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 999px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode-toggle:hover {
  background-color: #777;
  color: white;
}

.container.dark .text-block {
  color: rgba(255, 255, 255, 0.95);
}

.container.dark button {
  background-color: #555;
  color: rgba(255, 255, 255, 0.95);
}

.container.dark button:hover {
  background-color: #e0e0e0;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.95);
}

.container.dark .dark-mode-toggle {
  background-color: #dedede;
  color: rgba(0, 0, 0, 0.95);
}

.dark-mode-toggle i {
  margin-right: 0.5rem;
}

/* .text-block.dark {
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.7);
} */

/* Media Queries for responsive design */
@media (min-width: 600px) {
  .text-block {
    font-size: 1.25rem;
    width: 80%;
  }

  .next-section {
    margin-top: 3rem;
  }
}

@media (min-width: 768px) {
  .text-block {
    font-size: 1.5rem;
    width: 70%;
  }

  .next-section {
    margin-top: 4rem;
  }
}

@media (min-width: 1024px) {
  .text-block {
    font-size: 1.75rem;
    width: 60%;
  }

  .next-section {
    margin-top: 5rem;
  }
}

@media (min-width: 1280px) {
  .text-block {
    font-size: 2rem;
    width: 50%;
  }

  .next-section {
    margin-top: 6rem;
  }
}

@media (min-width: 1600px) {
  .text-block {
    font-size: 2.5rem;
    width: 40%;
  }

  .next-section {
    margin-top: 7rem;
  }
}
</style>
