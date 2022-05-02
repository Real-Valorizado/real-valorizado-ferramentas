import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function AdvanceRealTimeChart() {
    return (
        <div className="max-w-screen mx-auto h-screen">
            <div className="h-full">
                <AdvancedRealTimeChart
                    symbol="BINANCE:BTCBRL"
                    interval="D"
                    timezone="America/Sao_Paulo"
                    theme="light"
                    style="1"
                    locale="br"
                    toolbar_bg="#7cda24"
                    allow_symbol_change
                    details
                    hotlist
                    autosize
                />
            </div>
        </div>
    );
}