import { assign, createMachine } from 'xstate';

type TCountdownMachineContext = {
  newYear: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

const countdownMachine = createMachine<TCountdownMachineContext>(
  {
    id: 'countdownMachine',
    initial: 'running',
    context: {
      newYear: new Date(new Date().getFullYear() + 1, 0, 1).getTime(),
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    },
    states: {
      running: {
        entry: 'countdown',
        after: {
          1000: {
            target: 'running',
          },
        },
      },
    },
  },
  {
    actions: {
      countdown: assign(({ newYear }) => {
        const current = new Date().getTime();
        const total = (newYear - current) / 1000;
        return {
          seconds: Math.floor(total) % 60,
          minutes: Math.floor(total / 60) % 60,
          hours: Math.floor(total / 3600) % 24,
          days: Math.floor(total / 3600 / 24),
        };
      }),
    },
  }
);

export default countdownMachine;
