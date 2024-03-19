import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      projectTitle,
      projectDescription,
      projectLink,
      projectTags,
      projectImage {
        asset -> {
          url
        }
      },
      projectType,
    }`
  );
}
