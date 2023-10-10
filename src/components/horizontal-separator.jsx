import * as Separator from '@radix-ui/react-separator';

/**
 * Component for a custom horizontal separator based on radix-ui.
 */
const HorizontalSeparator = () => {
    return (
    <Separator.Root className="bg-gray6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[10px]" />
    );
};
export default HorizontalSeparator;