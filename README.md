# A4B-Shuffler

Text shuffling animation library with random character transitions.

## Installation

```ts
import { A4BShuffler } from "@a4banana/a4b-shuffler"
```

## Usage

```ts
const shuffler = A4BShuffler('Text To Shuffle', 2.5)

// Progress from 0 to 1
shuffler.getShuffledTextByProgress(0)      // "-------------"       (Initial state)
shuffler.getShuffledTextByProgress(0.25)   // "--xt T- sh--f--"    (Random characters)
shuffler.getShuffledTextByProgress(0.5)    // "Te-t To Sh-f-le"    (Mix of real and random)
shuffler.getShuffledTextByProgress(0.75)   // "Text To Sh-ffle"    (Nearly complete)
shuffler.getShuffledTextByProgress(1)      // "Text To Shuffle"    (Final state)
```

## API

### A4BShuffler(text: string, delay: number = 2.5)

- `text`: Original text
- `delay`: Animation delay multiplier (default: 2.5)

Returns:
- `getShuffledTextByProgress(progress: number)`: Get shuffled text at specified progress (0-1)

## License

MIT