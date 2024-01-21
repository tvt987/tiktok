import { useState } from 'react';
import images from '~/static/images/Logo';
import { forwardRef } from 'react';

function Image({ src, alt, ...props }, ref) {
    const [failBack, setFailBack] = useState('');
    const handleError = () => {
        setFailBack(images.noImage);
    };
    return <img ref={ref} src={failBack || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
