#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <RNKakaoLogins.h>
#import <NaverThirdPartyLogin/NaverThirdPartyLogin.h> // Naver SDK 헤더 추가

@implementation AppDelegate

// Kakao 및 Naver 로그인 관련 메서드
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  // Naver
  // TODO: 네이버클라이언트앱 소문자 그대로
  if ([url.scheme isEqualToString:@"네이버클라이언트앱"]) {
    return [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
  }

  // Kakao
  if ([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
    return [RNKakaoLogins handleOpenUrl:url];
  }

  return NO;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ClientApp";
  // 초기 props 설정
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
