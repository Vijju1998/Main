

export interface ToggleProps  {
    colorMode: () => void;
    theme: {
        palette: {
            mode: string
        },
    }
}