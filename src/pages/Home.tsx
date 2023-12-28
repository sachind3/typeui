import { useEffect, useState } from "react";
import { Button } from "../ui";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <div className="space-y-3 px-4">
      <div>
        <h4>Solid Variants</h4>
        <div className="flex gap-3">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
        </div>
      </div>
      <div>
        <h4>Outline Variants</h4>
        <div className="flex gap-3">
          <Button variant="primary-outline">Primary Button</Button>
          <Button variant="secondary-outline">Secondary Button</Button>
          <Button variant="danger-outline">Danger Button</Button>
          <Button variant="success-outline">Success Button</Button>
        </div>
      </div>
      <div>
        <h4>Sizes</h4>
        <div className="flex gap-3 items-center">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>
      <div>
        <h4>Disabled State</h4>
        <div className="flex gap-3">
          <Button disabled>Disabled Button</Button>
        </div>
      </div>
      <div>
        <h4>Loading State</h4>
        <div className="flex gap-3">
          <Button onClick={handleClick} disabled={isLoading}>
            {isLoading ? "Loading…" : "Click to load"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
