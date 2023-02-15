import * as React from 'react'
import { Body, Button, CircleImg, Information } from '@tryrolljs/design-system'
import { useSession } from '@tryrolljs/session-manager'

export default function UserInfo() {
  const session = useSession()

  const userImage =
    session.user.media && session.user.media[0]
      ? session.user.media[0].link
      : undefined

  return (
    <div style={{ maxWidth: '100%', width: 200, padding: 16 }}>
      <CircleImg uri={userImage} />
      <br />
      <Information>
        <Information.Item
          key="username"
          label="Username"
          value={<Body>{session.user.username}</Body>}
        />
        <Information.Item
          key="name"
          label="Name"
          value={<Body>{session.user.name}</Body>}
        />
      </Information>
      <br />
      <Button title="Refresh session" onPress={session.refresh} />
    </div>
  )
}
