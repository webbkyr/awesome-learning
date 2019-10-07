import React from 'react';
import { render } from '@testing-library/react';
import Courses from './Courses';
import LastLessonProvider from '../../providers/LastLessonProvider';

describe('Courses', () => {
  it('renders correctly', () => {
    const props = {
      edges: [
        { node: {
          frontmatter: {
            title: 'FooTitle',
            category: 'bar',
            slug: '/foo/bar',
            description: 'awesome course description'
          },
          fields: {
            categorySlug: '/category/bar',
            slug: '/foobar'
          }
        }},
      ],
      isHorizational: false
    };

    const { queryByText, container } = render(
      <LastLessonProvider>
        <Courses edges={props.edges} isHorizational={ props.isHorizational} />
      </LastLessonProvider>
    );
    expect(queryByText('FooTitle')).toBeTruthy();
    expect(container.querySelector('.CourseList--isHorizontal')).toBeFalsy();
    
  });
});
