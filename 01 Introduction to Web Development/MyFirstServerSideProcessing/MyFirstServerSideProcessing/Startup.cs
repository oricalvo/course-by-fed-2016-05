using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyFirstServerSideProcessing.Startup))]
namespace MyFirstServerSideProcessing
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
