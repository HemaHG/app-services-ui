import React, { useContext, } from 'react';
import { ConfigContext } from "@bf2/ui-shared";
import { ServiceDownPage } from "@app/pages";
import { DevelopmentPreview, FederatedModule } from "@app/components";

export const SrPage: React.FunctionComponent= () => {
  const config = useContext(ConfigContext);

  if (config?.serviceDown) {
    return (<ServiceDownPage />);
  }

  return (<SrPageConnected />);
}

export const SrPageConnected: React.FunctionComponent = () => {
    const sr = (
    <FederatedModule
      // TODO This is the wrong scope to load from, but there is a skeleton page in kas-ui already - update once we have the new srs-ui ready
      scope="kas"
      module="./ServiceRegistry"
      render={(ServiceRegistryService) => {
        return (
          <ServiceRegistryService />
        );
      }}
    />
  );

  return <DevelopmentPreview> {sr} </DevelopmentPreview>;
};
