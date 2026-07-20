import type { Schema, Struct } from '@strapi/strapi';

export interface PropertyHomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_property_home_page_hero_sections';
  info: {
    displayName: 'HomePageHeroSection';
  };
  attributes: {
    featuredSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    featuredTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PropertyMarketPlanCategory extends Struct.ComponentSchema {
  collectionName: 'components_property_market_plan_categories';
  info: {
    displayName: 'MarketPlanCategory';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    marketPlan: Schema.Attribute.Relation<
      'oneToOne',
      'api::property-market-plan.property-market-plan'
    >;
    startingPrice: Schema.Attribute.Integer & Schema.Attribute.Required;
    startingPriceText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PropertyMarketPlanHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_property_market_plan_hero_sections';
  info: {
    description: '';
    displayName: 'MarketPlanHeroSection';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String & Schema.Attribute.Required;
    color: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    startingPrice: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PropertyMortageCalculator extends Struct.ComponentSchema {
  collectionName: 'components_property_mortage_calculators';
  info: {
    description: '';
    displayName: 'MortageCalculator';
  };
  attributes: {
    downPaymentText: Schema.Attribute.String & Schema.Attribute.Required;
    interestRateText: Schema.Attribute.String & Schema.Attribute.Required;
    loanDurationText: Schema.Attribute.String & Schema.Attribute.Required;
    monthlyPaymentText: Schema.Attribute.String & Schema.Attribute.Required;
    propertyValueText: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    yearsText: Schema.Attribute.String;
  };
}

export interface PropertyMortageData extends Struct.ComponentSchema {
  collectionName: 'components_shared_mortage_data';
  info: {
    description: '';
    displayName: 'MortageData';
  };
  attributes: {
    downPayment: Schema.Attribute.Decimal & Schema.Attribute.Required;
    loanDuration: Schema.Attribute.Integer & Schema.Attribute.Required;
    monthlyPayment: Schema.Attribute.Decimal & Schema.Attribute.Required;
    propertyValue: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface PropertyPaymentPlan extends Struct.ComponentSchema {
  collectionName: 'components_property_payment_plans';
  info: {
    displayName: 'PaymentPlan';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedFeaturedPictures extends Struct.ComponentSchema {
  collectionName: 'components_property_featured_pictures';
  info: {
    description: '';
    displayName: 'FeaturedPictures';
  };
  attributes: {
    first: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    fourth: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    second: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    third: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHomePagePerk extends Struct.ComponentSchema {
  collectionName: 'components_property_home_page_perks';
  info: {
    description: '';
    displayName: 'HomePagePerk';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    iconType: Schema.Attribute.Component<'shared.icon', false>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    description: '';
    displayName: 'icon';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'NONE',
        'ADD_CIRCLE',
        'ADD',
        'AIR_CONDITIONING_OUTLINE',
        'AREA_M2_OUTLINE',
        'BACK_LEFT_CIRCLE',
        'BALCONY_OUTLINE',
        'BATHROOM_OUTLINE',
        'BED_CHILD_OUTLINE',
        'BOAT_FRONT_OUTLINE',
        'BED_OUTLINE',
        'BUILDING_OUTLINE',
        'CAR_OUTLINE',
        'CHECK_BADGE',
        'CHECK_BADGE_OUTLINE',
        'CHECK_CIRCLE',
        'CHECK_CIRCLE_OUTLINE',
        'CHECK',
        'CHEVRON_DOWN_CIRCLE',
        'CHEVRON_DOWN',
        'CHEVRON_LEFT_CIRCLE',
        'CHEVRON_LEFT',
        'CHEVRON_RIGHT_CIRCLE',
        'CHEVRON_RIGHT',
        'CHEVRON_UP_CIRCLE',
        'CHEVRON_UP',
        'CLOSET_OUTLINE',
        'COMPASS_OUTLINE',
        'COPY_LINK_OUTLINE',
        'DASHBOARD',
        'DASHBOARD_OUTLINE',
        'DATE_CALENDAR',
        'DATE_CALENDAR_OUTLINE',
        'DETAILS_OUTLINE',
        'DOLPHIN',
        'ELEVATOR_OUTLINE',
        'FACEBOOK',
        'FILE_DOWNLOAD',
        'FILE_UPLOAD',
        'FILTER',
        'FILTERS',
        'FILTERS_OUTLINE',
        'GLASSES',
        'GLASSES_OUTLINE',
        'GYM_OUTLINE',
        'HANDSHAKE_OUTLINE',
        'HEART',
        'HEART_OUTLINE',
        'HELP_HAND_OUTLINE',
        'HILLYPOINT',
        'HOME_OUTLINE',
        'HOTAIRBALLOON',
        'ICECREAM',
        'ID',
        'ID_OUTLINE',
        'INDOOR_SWIMMING_POOL',
        'INSTAGRAM',
        'INVOICE_OUTLINE',
        'IRON_OUTLINE',
        'JACUZZI_OUTLINE',
        'LAGGUAGE_OUTLINE',
        'LINKEDIN',
        'LOADING',
        'LOCATION',
        'LOCATION_OUTLINE',
        'LOUNGE_OUTLINE',
        'MAIL',
        'MAIL_OUTLINE',
        'MAP',
        'MASK',
        'MENU_BURGER',
        'MORE',
        'NUMBER',
        'OPTIONS',
        'OUTDOOR_SWIMMING_POOL_OUTLINE',
        'PALM',
        'PARACHUTE',
        'PARK',
        'PEOPLE_GROUP',
        'PEOPLE_GROUP_OUTLINE',
        'PEOPLE',
        'PEOPLE_OUTLINE',
        'PERSON',
        'PERSON_OUTLINE',
        'PLANE_ARRIVAL',
        'PLANE_ARRIVAL_OUTLINE',
        'PLANE_CALENDAR_OUTLINE',
        'PLANE_CANCEL',
        'PLANE_CANCEL_OUTLINE',
        'PLANE_DEPARTURE',
        'PLANE_DEPARTURE_OUTLINE',
        'PLANE',
        'PLANE_OUTLINE',
        'PLANE_PLUS',
        'PLANE_PLUS_OUTLINE',
        'PLAYGROUND_OUTLINE',
        'QUESTION_CIRCLE',
        'QUESTION_CIRCLE_OUTLINE',
        'REMOVE_CIRCLE',
        'REMOVE',
        'REVIEWS_OUTLINE',
        'ROCKET_OUTLINE',
        'SAFARI',
        'SEARCH',
        'SECURITY',
        'SECURITY_OUTLINE',
        'SETTINGS',
        'SETTINGS_OUTLINE',
        'SHARE',
        'SHOPPING_BAG',
        'SHOPPING_BAG_OUTLINE',
        'SMILE',
        'STAR',
        'STAR_OUTLINE',
        'STATUE',
        'TABLE',
        'TICKET',
        'TICKET_OUTLINE',
        'TIME',
        'TIME_OUTLINE',
        'TOOLS_KITCHEN',
        'TOOLS_KITCHEN_OUTLINE',
        'TOWEL_OUTLINE',
        'TRANSFER',
        'TRANSFER_PLANE_OUTLINE',
        'TRASH',
        'TRASH_OUTLINE',
        'TV_OUTLINE',
        'TWITTER',
        'UMBRELLA_BEACH_OUTLINE',
        'WALLET_OUTLINE',
        'WARNING_CIRCLE',
        'WARNING_CIRCLE_OUTLINE',
        'WASHING_MACHINE_OUTLINE',
        'WATERFUN',
        'WATERSPORT',
        'WEIGHT',
        'WEIGHT_OUTLINE',
        'WHATSAPP',
        'WIFI',
        'WIFI_OUTLINE',
        'WORLD',
        'WORLD_OUTLINE',
        'XMARK_CIRCLE',
        'XMARK',
        'YACHT_OUTLINE',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_labels';
  info: {
    description: '';
    displayName: 'PluralableLabel';
  };
  attributes: {
    few: Schema.Attribute.String & Schema.Attribute.Required;
    many: Schema.Attribute.String & Schema.Attribute.Required;
    one: Schema.Attribute.String & Schema.Attribute.Required;
    other: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'Location';
    icon: 'house';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    latitude: Schema.Attribute.Float;
    longitude: Schema.Attribute.Float;
    placeId: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_property_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    additionalSeoText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    canonicalURL: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    keywords: Schema.Attribute.Text & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', false>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSubTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_tabs';
  info: {
    description: '';
    displayName: 'Sub Tab';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs';
  info: {
    description: '';
    displayName: 'Tab';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subTabs: Schema.Attribute.Component<'shared.sub-tab', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'property.home-page-hero-section': PropertyHomePageHeroSection;
      'property.market-plan-category': PropertyMarketPlanCategory;
      'property.market-plan-hero-section': PropertyMarketPlanHeroSection;
      'property.mortage-calculator': PropertyMortageCalculator;
      'property.mortage-data': PropertyMortageData;
      'property.payment-plan': PropertyPaymentPlan;
      'shared.faq': SharedFaq;
      'shared.featured-pictures': SharedFeaturedPictures;
      'shared.home-page-perk': SharedHomePagePerk;
      'shared.icon': SharedIcon;
      'shared.label': SharedLabel;
      'shared.location': SharedLocation;
      'shared.media': SharedMedia;
      'shared.meta-social': SharedMetaSocial;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.sub-tab': SharedSubTab;
      'shared.tab': SharedTab;
    }
  }
}
