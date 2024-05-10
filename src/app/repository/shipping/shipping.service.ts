import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  constructor() {}

  calculateShippingFee() {
    const body = {
      OriginRegion: '1',
      OriginProvince: '1',
      OriginCity: '1',
      DestinationRegion: '2',
      DestinationProvince: '2',
      DestinationCity: '2',
      IdProduct: '1',
      IdServiceType: '1',
      Weight: '1',
      DeclaredValue: '1',
      SoShopTier: 'Basic',
    };

    fetch(
      'https://lbcapigateway.lbcapps.com/prod/prodv1/api/CODCOP/CalculatePriceV3',
      {
        method: 'POST',
        body: JSON.stringify(body),
        // Request headers
        headers: {
          token:
            '257283ec43071ac87fcba53314f30c7727011eb93c04aa8e04aec92fc7448ad436bf68dfcef01b27aa971806233df0f4d76645eef61e6a0c1d4735ffe6c5fdf2',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          lbcOAkey: 'Baktin12311.',
        },
      }
    )
      .then((response) => {
        console.log(response.status);
        console.log(response.text());
        return response
      })
      .catch((err) => console.error(err));
  }
}
