import { createFileRoute } from '@tanstack/react-router'
import All_skills from './-components/all_skills'

export const Route = createFileRoute('/skills-page/')({
  component: () => (
    <div>
      <All_skills />
    </div>
  ),
})
