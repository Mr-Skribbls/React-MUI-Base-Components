import { useEffect, useMemo } from 'react';
import type { CSSProperties } from 'react';

type BaseProps = {
  alt: string;
  center: ImageCenter;
  className?: string;
  style?: CSSProperties;
};

// A utility type that generates a tuple of a specific length
type Enumerate<N extends number, Acc extends number[] = []> = 
  Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;

// This creates a type of integers from F (inclusive) to T (exclusive)
// We add "T" to the end to make it inclusive of the upper bound
type IntRange<F extends number, T extends number> = 
  Exclude<Enumerate<T>, Enumerate<F>> | T;

type ValidPercentage = IntRange<0, 100>;
export type ImageCenter = [ValidPercentage, ValidPercentage];

export type ImageDisplayProps = 
  | ({ imageUrl: string } & BaseProps)
  | ({ imageFile: File } & BaseProps);

export const ImageDisplay = (props: ImageDisplayProps) => {
  const { className, style } = props;

  const { imageUrl, revokeUrl } = useMemo(() => {
    if ('imageUrl' in props) {
      return { imageUrl: props.imageUrl, revokeUrl: null };
    }
    return { imageUrl: URL.createObjectURL(props.imageFile), revokeUrl: props.imageFile };
  }, [props]);

  useEffect(() => () => {
    if (revokeUrl) {
      URL.revokeObjectURL(imageUrl);
    }
  }, [imageUrl, revokeUrl]);

  const objectPosition = `${props.center[0]}% ${props.center[1]}%`;

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={props.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            display: 'block',
          }}
        />
      ) : null}
    </div>
  );
};

export default ImageDisplay;