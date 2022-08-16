import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingPlaceholder = (props) => {
    const { color, highlightColor } = props;

    if (color || highlightColor)
        return (
            <SkeletonTheme color={color} highlightColor={highlightColor}>
                <Skeleton {...props} />
            </SkeletonTheme>
        );

    return <Skeleton {...props} />;
}

export default LoadingPlaceholder;
