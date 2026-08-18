// Cloudflare Pages Functions 中间件:全站 HTTP Basic 认证
// 账号密码来自 Cloudflare 控制台配置的环境变量 BASIC_USER / BASIC_PASS
export async function onRequest(context) {
  const { request, env, next } = context;

  if (!env.BASIC_USER || !env.BASIC_PASS) {
    return new Response("Server misconfigured: BASIC_USER / BASIC_PASS not set", { status: 500 });
  }

  const expected = "Basic " + btoa(`${env.BASIC_USER}:${env.BASIC_PASS}`);
  if (request.headers.get("Authorization") === expected) {
    return next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="TokyoDoor Design Preview", charset="UTF-8"' },
  });
}
