# MDX Components

This folder contains reusable components specifically designed for use within MDX blog posts.

## Components

### `Callout.astro`
A versatile callout component for highlighting important information in blog posts.

**Types:** `info`, `warning`, `success`, `error`

**Usage:**
```jsx
<Callout type="info">
  Important information here
</Callout>
```

### `CodeBlock.astro`
A styled code block component with syntax highlighting and title support.

**Usage:**
```jsx
<CodeBlock title="example.js" language="javascript">
{`console.log("Hello, world!");`}
</CodeBlock>
```

### `InteractiveCounter.tsx`
An interactive Preact component demonstrating client-side interactivity in MDX.

**Props:**
- `initialValue?: number` - Starting count value
- `step?: number` - Increment/decrement step
- `label?: string` - Display label

**Usage:**
```jsx
<InteractiveCounter 
  client:load 
  initialValue={10} 
  step={5} 
  label="My Counter" 
/>
```

## Best Practices

- Always import components at the top of your MDX files
- Use appropriate client directives (`client:load`, `client:visible`, etc.) for interactive components
- Keep components focused and reusable
- Document component props and usage
