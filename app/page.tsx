import Profile from "./components/profile";
import { SignMessageComponent } from "./components/sign-message";
import { SendTxnComponent } from "./components/send-transaction";
import { BalanceComponent } from "./components/balance";
import ReadBlockchainInfo from "./components/read-blockchain";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Index() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Metavault SDK Test Client dApp
            </h2>
            <div className="flex items-center space-x-2">
              <Profile />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-black bg-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Sign Message</div>
                  <p className="text-xs text-muted-foreground">
                    Sign text message
                  </p>

                  <SignMessageComponent />
                </CardContent>
              </Card>
              <Card className="text-black bg-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Send Transaction</div>
                  <p className="text-xs text-muted-foreground">
                    Send Transaction
                  </p>

                  <SendTxnComponent />
                </CardContent>
              </Card>
              <Card className="text-black bg-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Balance & Allowance </div>
                  <p className="text-xs text-muted-foreground">
                    Balance & Give Allowance
                  </p>

                  <BalanceComponent />
                </CardContent>
              </Card>

              <Card className="text-black bg-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Read Blockchain Info</div>
                  <p className="text-xs text-muted-foreground">
                    Public Actions
                  </p>

                  <ReadBlockchainInfo />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
