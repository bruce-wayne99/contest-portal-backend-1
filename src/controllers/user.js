import User from '../models/User'

export async function create(ctx) {
  ctx.body = 'Create user'
}

export async function get(ctx) {
  const { id } = ctx.params
  ctx.body = await User.findOne({
    where: { id },
  })
}

export async function del(ctx) {
  ctx.body = 'Delete user'
}
