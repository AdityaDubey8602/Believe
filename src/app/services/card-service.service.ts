import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor() { }

  cardDetails = [
    {
      source:'../../../assets/imgs/catalog.jpg',
      heading: 'Cataloging',
      details:'Our cataloging service optimizes product data, categorization and content for e-commerce success. Information will be complete, accurate and up-to-date. Descriptions, images and content optimized for visibility and sales.',
    },
    {
      source:'../../../assets/imgs/brochure.png',
      heading: 'Development',
      details:'E-commerce account management made easy with our service. Includes order fulfillment, customer service and performance tracking. Issues resolved and excellent customer service provided. Sales performance monitored for improvement.',
    },
    {
      source:'../../../assets/imgs/brochure.png',
      heading: 'EBC (Enhance Brand Content)',
      details:'EBC boosts your e-commerce brand with optimized content. Includes eye-catching product descriptions, images and branding. Professional online presence ensured through consistent brand representation.'},
    {
      source:'../../../assets/imgs/brochure.png',
      heading: 'Advertising Optimization',
      details:'Maximize e-commerce sales with our ad optimization. Includes campaign management, performance tracking and improved ROI. Target the right customers for maximum visibility.'},
    {
      source:'../../../assets/imgs/brochure.png',
      heading: '360 Brand Marketing',
      details:'360 Brand Marketing elevates your e-commerce success. Includes high-quality product listings, advertising campaigns, promotions, and professional customer reviews management. Boost brand presence and drive sales.'},
    {
      source:'../../../assets/imgs/brochure.png',
      heading: 'Brand Store',
      details:'Stand out with a pro Brand Store. Includes store design, optimized product listings and full store management. Boost brand visibility and customer loyalty.'},
    {
      source:'../../../assets/imgs/brochure.png',
      heading: 'Amazon Brand Registry',
      details:'Protect your Amazon brand with Registry. Includes brand verification for greater control of product listings and brand image. Trademark protection included.'},
  ];
}
