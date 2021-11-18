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

type ApiPostProps = {
  id: string;
  attributes: ApiPublicationAttributesProps;
  [key: string]: unknown;
};

export default ApiPostProps;
