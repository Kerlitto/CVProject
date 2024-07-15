import { Spinner } from "./ui/Spinner";

export interface RendererProps {
  isLoading: boolean;
  error?: string | null;
  children: React.ReactNode;
}

export const DataRenderer = ({ children, error, isLoading }: RendererProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner size="sm" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return children;
};

export default DataRenderer;
