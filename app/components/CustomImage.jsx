'use client'; // Mark as Client Component

  export default function CustomImage(props) {
    return (
      <img
        {...props}
        alt={props.alt || 'Image'}
        className="mx-auto max-w-[800px] w-full h-auto my-4 rounded-lg object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          console.error('Image load failed:', props.src);
        }}
      />
    );
  }