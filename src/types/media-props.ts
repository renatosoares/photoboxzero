type MediaAttributesProps = {
  id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  size: number;
  custom_properties: {
    title: string;
    description: string;
    keywords: string[];
  };
  order_column: number;
  created_at: Date;
  updated_at: Date;
  full_url: string;
};

type MediaRelationshipsProps = {
  [key: string]: unknown;
};

type MediaProps = {
  id: string;
  attributes: MediaAttributesProps;
  relationships: MediaRelationshipsProps;
};

export default MediaProps;
