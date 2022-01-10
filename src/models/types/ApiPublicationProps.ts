type ApiPublicationAttributesProps = {
  id: number;
  title: string;
  slug: string;
  body?: string | null;
  user_id: number;
  media_id: number;
  active: boolean;
  [key: string]: unknown;
};

type ApiPublicationRelationshipsProps = {
  media: { data: { attributes: { full_url: string; id: number } } };
  [key: string]: unknown;
};

type ApiPublicationProps = {
  id: string;
  attributes: ApiPublicationAttributesProps;
  relationships: ApiPublicationRelationshipsProps;
  [key: string]: unknown;
};

export default ApiPublicationProps;
