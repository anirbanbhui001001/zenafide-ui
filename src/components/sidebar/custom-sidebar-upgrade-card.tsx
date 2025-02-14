
"use client";

import React from "react";
import {Card, CardBody, CardFooter, Button} from "@heroui/react";

export default function UpgradeCard() {
  return (
    <Card className="mx-2 overflow-visible" shadow="sm">
      <CardBody className="items-center py-5 text-center">
        <h3 className="text-medium font-medium text-default-700">
          Upgrade to Pro
          <span aria-label="rocket-emoji" className="ml-2" role="img">
            🚀
          </span>
        </h3>
        <p className="p-4 text-small text-default-500">
          Get 1 month free and unlock all the features of the pro plan.
        </p>
      </CardBody>
      <CardFooter className="absolute -bottom-8 justify-center">
        <Button className="px-10" color="primary" radius="full">
          Upgrade
        </Button>
      </CardFooter>
    </Card>
  );
}
