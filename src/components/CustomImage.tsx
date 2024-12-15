import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomImage = (props: any) => {
    // 檢查是否有設置 assetPrefix，如果有，則自動在路徑前加上
    const updatedSrc =
        process.env.NODE_ENV === 'production' &&
        !props.src.startsWith('/next14_demo')
            ? `/next14_demo${props.src}`
            : props.src;

    return <Image {...props} src={updatedSrc} />;
};

export default CustomImage;
