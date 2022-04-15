type PublicationAttributesProps = {
  id: number;
  title: string;
  slug: string;
  body?: string | null;
  user_id: number;
  media_id: number;
  active: boolean;
  [key: string]: unknown;
};

type PublicationRelationshipsProps = {
  media: { data: { attributes: { full_url: string; id: number } } };
  [key: string]: unknown;
};

type PublicationProps = {
  id: string;
  attributes: PublicationAttributesProps;
  relationships: PublicationRelationshipsProps;
};

export default PublicationProps;
